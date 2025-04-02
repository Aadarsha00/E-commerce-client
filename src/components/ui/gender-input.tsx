/* eslint-disable @typescript-eslint/no-explicit-any */
import Select from "react-select";
import { Controller } from "react-hook-form";
interface IProps {
  control: any;
}
const Gender: React.FC<IProps> = ({ control }) => {
  const options = [
    {
      label: "Male",
      value: "Male",
    },
    {
      label: "Female",
      value: "Female",
    },
    {
      label: "Others",
      value: "Others",
    },
  ];

  return (
    <>
      <Controller
        name="gender"
        control={control}
        render={({ field }) => {
          return (
            <section>
              <label
                htmlFor="Gender"
                className="text-base tracking-wide font-semibold text-gray-800"
              >
                Gender
              </label>
              <Select {...field} options={options} />
            </section>
          );
        }}
      ></Controller>
    </>
  );
};

export default Gender;
