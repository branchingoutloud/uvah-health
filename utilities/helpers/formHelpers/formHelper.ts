import { BASE_URL, postData } from "@/utilities/api/apiConfig";
import { appointmentFormSchema } from "@/utilities/commonInterface/zodSchema";
import { z } from "zod";

export function onAppointmentFormSubmit(
  values: z.infer<typeof appointmentFormSchema>
) {
  // Do something with the form values.
  // ✅ This will be type-safe and validated.
  console.log("this is from form submit schema");
  console.log(values);
  const result = postData(
    {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    values,
    "/apt/contactus/",
    BASE_URL
  );
  console.log(result);
  return result;
}
