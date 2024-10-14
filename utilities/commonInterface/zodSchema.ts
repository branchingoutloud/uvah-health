import { z } from "zod";

export const appointmentFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  birthday: z.string().refine((date) => {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(date);
  }, "Birthday must be in YYYY-MM-DD format"),
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
  appointmentDate: z.string().refine((date) => {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(date);
  }, "Appointment date must be in YYYY-MM-DD format"),
  appointmentTime: z.string().refine((time) => {
    const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
    return timeRegex.test(time);
  }, "Appointment time must be in HH:mm format"),
});
