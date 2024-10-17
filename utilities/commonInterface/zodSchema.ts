import { z } from "zod";

export const appointmentFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  birthday: z.date({
    required_error: "Birthday is required",
    invalid_type_error: "Birthday must be a valid date",
  }),
  gender: z.enum(["Male", "Female", "Other"], {
    errorMap: () => ({ message: "Gender must be Male, Female, or Other" }),
  }),
  email: z.string().email("Invalid email address"),
  countryCode: z.string().min(1, "Country code is required"),
  mobileNo: z
    .string()
    .min(10, "Mobile number must be at least 10 digits")
    .max(15, "Mobile number can't be longer than 15 digits"),
  services: z.string().min(1, "Service is required"),
  appointmentDate: z.date({
    required_error: "Appointment date is required",
    invalid_type_error: "Appointment date must be a valid date",
  }),
  appointmentTime: z.string().refine((time) => {
    const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
    return timeRegex.test(time);
  }, "Appointment time must be in HH:mm format"),
});
