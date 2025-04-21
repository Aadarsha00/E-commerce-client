/* eslint-disable @typescript-eslint/no-explicit-any */
import { getReview, review } from "@/api/review";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Rating from "../ui/rating";
import { IFormReview } from "@/interface/auth/review.interface";

interface IProp {
  productId: string;
}

const Index: React.FC<IProp> = ({ productId }) => {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<IFormReview>({
    defaultValues: {
      rating: 1,
      review: "",
    },
  });

  const currentRating = watch("rating");

  // Query for reviews
  const { data: reviewsData, isLoading } = useQuery({
    queryKey: ["reviews", productId],
    queryFn: () => getReview(productId),
  });

  // Mutation for submitting a review
  const { mutate } = useMutation({
    mutationFn: review,
    mutationKey: ["review"],
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["reviews", productId],
      });
      toast.success("Review posted successfully!");
      reset();
    },
    onError: (error: Error) => {
      console.error("Review submission error:", error);
      toast.error(error.message ?? "Something went wrong!");
    },
  });

  const onSubmit: SubmitHandler<IFormReview> = (data) => {
    if (data.rating < 1) {
      toast.error("Please select a rating (minimum 1 star)");
      return;
    }

    mutate({ ...data, productId });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-pulse text-xl font-medium text-gray-600">
          Loading...
        </div>
      </div>
    );
  }

  const reviews = reviewsData?.data || [];

  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* Review Form */}
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">Write a Review</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm tracking-wide font-medium text-gray-700">
              Rating
            </label>
            <Rating
              rating={currentRating}
              onChange={(rating: number) => setValue("rating", rating)}
              editable={true}
            />
            {currentRating < 1 && (
              <p className="text-xs text-red-500 mt-1">
                Please select a rating (minimum 1 star)
              </p>
            )}
            {errors?.rating && (
              <p className="text-xs text-red-500 mt-1">
                {errors.rating.message}
              </p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm tracking-wide font-medium text-gray-700">
              Review
            </label>
            <textarea
              {...register("review", {
                required: "Review is required",
                minLength: {
                  value: 5,
                  message: "Review must be at least 5 characters",
                },
              })}
              className={`w-full text-base border ${
                errors.review ? "border-red-500" : "border-gray-300"
              } px-3 py-2 rounded-lg placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
              rows={4}
              placeholder="Share your experience with this product..."
            />
            {errors?.review && (
              <p className="text-xs text-red-500 mt-1">
                {errors.review.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting || currentRating < 1}
            className={`flex justify-center items-center gap-2 text-base font-semibold px-4 py-3 ${
              currentRating < 1
                ? "bg-blue-400"
                : "bg-blue-600 hover:bg-blue-700"
            } rounded-lg text-white cursor-pointer focus:ring-4 focus:ring-blue-300 transition-all duration-300 shadow-sm w-full mt-4`}
          >
            {isSubmitting ? "Submitting..." : "Submit Review"}
          </button>
        </form>
      </div>

      {/* Reviews List */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>
        {reviews.length > 0 ? (
          reviews.map((review: any) => (
            <div key={review._id} className="border-b pb-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium text-sm">
                  {review?.user?.firstName
                    ? review.user.firstName.split("")[0].toUpperCase()
                    : "?"}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">
                      {review?.user?.firstName} {review?.user?.lastName}
                    </h3>
                    <Rating rating={review.rating} />
                  </div>
                </div>
              </div>
              <p className="mt-2 text-gray-600 ml-11">{review.review}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500 italic">
            No reviews yet. Be the first to leave a review!
          </p>
        )}
      </div>
    </div>
  );
};

export default Index;
