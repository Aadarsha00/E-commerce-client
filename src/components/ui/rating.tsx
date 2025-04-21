"use client";
import { StarRating } from "react-flexible-star-rating";

interface IProp {
  rating?: number;
  onChange?: (rating: number) => void;
  editable?: boolean;
}

const Rating: React.FC<IProp> = ({
  rating = 0,
  onChange,
  editable = false,
}) => {
  const validRating = Math.round(Number(rating) * 2) / 2 || 0;
  return (
    <div>
      <StarRating
        dimension={8}
        isReadOnly={!editable}
        initialRating={validRating}
        onRatingChange={(newRating) => {
          if (onChange) {
            onChange(newRating);
          }
        }}
      />
    </div>
  );
};
export default Rating;
