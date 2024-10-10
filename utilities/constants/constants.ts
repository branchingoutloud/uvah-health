import {
  BookSectionCard1BackgroundImage,
  CardImage1,
  CardImage2,
  DnaImage,
  DoctorImage1,
  NavLogo,
  ProfileFallback,
} from "@/public";

export const contents = {
  navbar: {
    logo: NavLogo,
    links: [
      {
        id: 1,
        title: "About Us",
        link: "#",
      },
      {
        id: 2,
        title: "Services",
        link: "#",
      },
      {
        id: 3,
        title: "Blogs",
        link: "#",
        elements: [
          {
            title: "Alert Dialog",
            href: "/docs/primitives/alert-dialog",
            description:
              "A modal dialog that interrupts the user with important content and expects a response.",
          },
          {
            title: "Hover Card",
            href: "/docs/primitives/hover-card",
            description:
              "For sighted users to preview content available behind a link.",
          },
        ],
      },
      {
        title: "Contact Us",
        link: "#",
      },
    ],
  },
  hero: {
    title: "Transforming Women's Health with Care",
    description:
      "Your trusted partner in accurate diagnoses and personalized healthcare, guiding you to better health with tailored solutions and expert care.",
    button: "Book an Appointment",
    image: "/images/heroImage.png",
  },
  services: {
    title: "UVAH Health Services",
    button: "See More",
  },
  serviceCards: [
    {
      id: 1,
      name: "Ultrasound",
      serviceDes: "Abdomen, Neck, KUB or other areas",
      serviceCharges: 1000,
      created_at: "2024-10-09T12:02:56.037329+05:30",
      updated_at: "2024-10-09T12:02:56.037329+05:30",
      serviceSpecialty: [1],
      serviceArea: [1],
    },
    {
      id: 2,
      name: "NT Scan",
      serviceDes:
        "NT Scan can measure the clear space at the back of your baby&apos;s neck to predict the risk of Down syndrome and other conditions.",
      serviceCharges: 1000,
      created_at: "2024-10-09T12:10:18.731015+05:30",
      updated_at: "2024-10-09T12:10:18.731015+05:30",
      serviceSpecialty: [1],
      serviceArea: [1],
    },
    {
      id: 3,
      name: "Dating Scan",
      serviceDes:
        "A dating scan is a method that is used to reliably assess the age of a fetus",
      serviceCharges: 1000,
      created_at: "2024-10-09T12:13:15.094214+05:30",
      updated_at: "2024-10-09T12:13:15.094214+05:30",
      serviceSpecialty: [1],
      serviceArea: [1],
    },
    {
      id: 4,
      name: "Growth Scan",
      serviceDes: "Learn about the growth scan in pregnancy",
      serviceCharges: 1000,
      created_at: "2024-10-09T12:14:29.376746+05:30",
      updated_at: "2024-10-09T12:14:29.376746+05:30",
      serviceSpecialty: [1],
      serviceArea: [1],
    },
    {
      id: 5,
      name: "Anomaly Scan",
      serviceDes:
        "An anomaly scan is a detailed mid-pregnancy ultrasound scan that checks your baby&apos;s growth, organs, and placenta.",
      serviceCharges: 1000,
      created_at: "2024-10-09T12:15:35.253843+05:30",
      updated_at: "2024-10-09T12:15:35.253843+05:30",
      serviceSpecialty: [1],
      serviceArea: [1],
    },
    {
      id: 6,
      name: "Color Doppler",
      serviceDes:
        "The use of color flow Doppler (CFD) or color Doppler imaging (CDI) (or simply color Doppler) sonography allows the visualization of flow direction",
      serviceCharges: 1000,
      created_at: "2024-10-09T12:17:06.820137+05:30",
      updated_at: "2024-10-09T12:17:06.820137+05:30",
      serviceSpecialty: [1],
      serviceArea: [1],
    },
    {
      id: 7,
      name: "ECG",
      serviceDes:
        "Measures electrical activity of the heart to detect cardiac problems.",
      serviceCharges: 1000,
      created_at: "2024-10-09T12:17:50.040633+05:30",
      updated_at: "2024-10-09T12:17:50.040633+05:30",
      serviceSpecialty: [1],
      serviceArea: [1],
    },
    {
      id: 8,
      name: "Blood test",
      serviceDes: "Blood test",
      serviceCharges: 1000,
      created_at: "2024-10-09T12:18:41.507361+05:30",
      updated_at: "2024-10-09T12:18:41.507361+05:30",
      serviceSpecialty: [2],
      serviceArea: [1],
    },
    {
      id: 9,
      name: "Urine Analysis",
      serviceDes: "Urine Analysis",
      serviceCharges: 1000,
      created_at: "2024-10-09T12:19:06.792645+05:30",
      updated_at: "2024-10-09T12:19:06.792645+05:30",
      serviceSpecialty: [2],
      serviceArea: [1],
    },
  ],
  bookSection: {
    title:
      "Experience exceptional healthcare with our Professional doctors through convenient appointment consultations.",
    card1: {
      title: "Consultation with our expert guidance",
      description:
        "Schedule your appointment today to receive personalized care that prioritizes your health!",
      button: "Book Appointment",
      image: BookSectionCard1BackgroundImage,
    },
    card2: {
      image1: DoctorImage1,
      image2: DnaImage,
    },
  },
  articleSection: {
    title: "Read our latest articles",
    button: "Read More",
    blogs: [
      {
        id: 1,
        title: "5 Routine Screenings Every Woman Should Get",
        blogText:
          "As women, it's important to take charge of our health and make sure we're staying on top of routine screenings that can detect potential health issues early on. Here are 5 routine screenings that every woman should get:\r\n1.\tMammograms: Mammograms are x-ray images of the breast that can detect early signs of breast cancer. Women over the age of 50 should get a mammogram every 2 years, while women with a family history of breast cancer or other risk factors may need to start getting mammograms earlier.\r\n2.\tPap Smears: Pap smears, also known as Pap tests, are screenings that can detect abnormal cells in the cervix that may lead to cervical cancer. Women should start getting pap smears at the age of 21 and continue every 3 years until the age of 65.\r\n3.\tBlood Tests: Blood tests can help detect a range of health issues, including high cholesterol, diabetes, and thyroid problems. Women should get regular blood tests as recommended by their healthcare provider.\r\n4.\tBone Density Screening: Bone density screening can detect early signs of osteoporosis, a condition that weakens bones and increases the risk of fractures. Women over the age of 65 should get a bone density screening every 2 years, while women with certain risk factors may need to start getting screened earlier.\r\n5.\tSkin Cancer Screening: Skin cancer is the most common form of cancer in the United States, and women should get regular skin cancer screenings to detect potential issues early on. Women should also be vigilant about checking their skin for any unusual moles or growths and report any changes to their healthcare provider.\r\nRemember, these screenings can save lives and it's important to stay on top of them. Talk to your healthcare provider about which screenings are recommended for you based on your age, health history, and other risk factors.",
        author: "DR. K.V. Brinda",
        created_at: "2024-10-09T11:56:22.134317+05:30",
        updated_at: "2024-10-09T11:56:22.134317+05:30",
        blogCategory: [1],
      },
      {
        id: 2,
        title: "Why Holistic Care is Important for Women's Health",
        blogText:
          "Holistic care, which focuses on treating the whole person rather than just their physical symptoms, can be an important part of a woman's healthcare regimen. Here are some of the benefits of incorporating holistic care into your routine:\r\n1.\tMental Health: Holistic care can help improve mental health by addressing stress, anxiety, and depression through techniques like meditation, mindfulness, and therapy.\r\n2.\tNutrition: Holistic care can also focus on nutrition, helping women make healthy choices and develop sustainable eating habits that can prevent chronic conditions like heart disease and diabetes.\r\n3.\tExercise: Exercise is an important part of holistic care, and can improve physical health while also reducing stress and improving mental well-being.\r\n4.\tMind-Body Connection: Holistic care emphasizes the connection between the mind and body, and can help women develop a deeper understanding of their own physical and emotional health.\r\n5.\tPersonalized Care: Holistic care is often personalized to the individual, taking into account their unique health history, lifestyle, and preferences.\r\nIf you're interested in incorporating holistic care into your healthcare routine, talk to your healthcare provider about your options. They can provide recommendations for practitioners and resources that can help you achieve optimal health and well-being.",
        author: "DR. K.V. Brinda",
        created_at: "2024-10-09T11:57:20.503185+05:30",
        updated_at: "2024-10-09T11:57:20.503185+05:30",
        blogCategory: [1, 2],
      },
    ],
  },
  experts: {
    title: "Meet the Experts Behind Your Care",
    description:
      "Our expert team is dedicated to delivering compassionate, personalized care, supporting every aspect of women&apos;s health and wellness, from prevention to advanced treatments.",
    experts: [
      {
        id: 1,
        name: "DR. K.V. Brinda",
        designation: "Lead Radiologist",
        qualification: "MBBS, MD Radiology",
        image: ProfileFallback,
        about: "Dr. Jane Doe is a gynecologist with 10 years of experience",
      },
      {
        id: 2,
        name: "Dr. Lalitha",
        designation: "Lead Pathologist",
        qualification: "MBBS, MD Pathology",
        image: ProfileFallback,
        about: "Dr. Jane Doe is a gynecologist with 10 years of experience",
      },
      {
        id: 3,
        name: "DR. K.V. Brinda",
        designation: "Lead Radiologist",
        qualification: "MBBS, MD Radiology",
        image: ProfileFallback,
        about: "Dr. Jane Doe is a gynecologist with 10 years of experience",
      },
      {
        id: 4,
        name: "DR. K.V. Brinda",
        designation: "Lead Radiologist",
        qualification: "MBBS, MD Radiology",
        image: ProfileFallback,
        about: "Dr. Jane Doe is a gynecologist with 10 years of experience",
      },
      {
        id: 5,
        name: "DR. K.V. Brinda",
        designation: "Lead Radiologist",
        qualification: "MBBS, MD Radiology",
        image: ProfileFallback,
        about: "Dr. Jane Doe is a gynecologist with 10 years of experience",
      },
    ],
  },
};
