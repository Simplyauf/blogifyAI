import User3 from "@/assets/users 02.svg";
import Decrease from "@/assets/arrow-down-circle.svg";
import Increase from "@/assets/arrow-up-circle.svg";
import ChartWave from "@/assets/chart-wave-rectangle.svg";
import ArrowRight from "@/assets/arrow-right.svg";
import Facebook from "@/assets/facebook.svg";
import FigmaIcon from "@/assets/figma.svg";
import BookIcon from "@/assets/book.svg";
import YoutubeIcon from "@/assets/youtube.svg";
import PackageIcon from "@/assets/package box 01.svg";
import UserIcon from "@/assets/users 02.svg";
import GoogleIcon from "@/assets/google.svg";
import ListCircleIcon from "@/assets/list view-circle.svg";
import InstaIcon from "@/assets/instagram.svg";
import TagIcon from "@/assets/tag.svg";
import NotesIcon from "@/assets/notes 01.svg";
import QuizIcon from "@/assets/quiz.svg";
import ArticleIcon from "@/assets/article.svg";
import SearchIcon from "@/assets/search 01.svg";
import GmailIcon from "@/assets/gmail.svg";
import PostIcon from "@/assets/post add.svg";
import NoteIcon2 from "@/assets/notes.svg";

export const AIFeatures = [
  {
    image: (className: string) => <ArticleIcon className={className} />,
    title: "Article Generator",
    description: "Use Blogify AI to generate relevant content.",
  },
  {
    image: (className: string) => <PackageIcon className={className} />,
    title: "Product Descriptor",
    description: "Generate compelling product descriptions.",
  },
  {
    image: (className: string) => <PostIcon className={className} />,
    title: "Post Scheduling",
    description: "Schedule your posts and have our AI publish automatically.",
  },
  {
    image: (className: string) => <BookIcon className={className} />,
    title: "Blog Post Idea",
    description: "Avoid writer’s block! Access AI-generated posts.",
  },

  {
    image: (className: string) => <ListCircleIcon className={className} />,
    title: "Google Ad Copy",
    description: "Generate optimized ad contents for specific audiences.",
  },
  {
    image: (className: string) => <InstaIcon className={className} />,
    title: "Generate Hashtags",
    description:
      "Use Blogify's AI to generate trending hashtags for your posts.",
  },
  {
    image: (className: string) => <QuizIcon className={className} />,
    title: "FAQ Generator",
    description:
      "Generate a list of frequently asked questions for improved customer support.",
  },
  {
    image: (className: string) => <YoutubeIcon className={className} />,
    title: "YouTube Video Description",
    description:
      "Boost your channel viewership with videos recommended by Blogify AI",
  },
  {
    image: (className: string) => <GmailIcon className={className} />,
    title: "Email Generator",
    description:
      "Create automated and personalized emails for efficient communication.",
  },
  {
    image: (className: string) => <Facebook className={className} />,
    title: "Facebook Ad Copy",
    description:
      "Enhance audience engagement and conversions effectively with our ad content.",
  },
  {
    image: (className: string) => <TagIcon className={className} />,
    title: "YouTube Video Tag",
    description:
      "Access relevant tags to improve discoverability and boost video visibility.",
  },

  {
    image: (className: string) => <InstaIcon className={className} />,
    title: "Instagram Caption",
    description:
      "Access engaging and tailored captions for posts and improve audience reach.",
  },
  {
    image: (className: string) => <NoteIcon2 className={className} />,
    title: "Image Generator",
    description:
      "Unleash your creativity with our powerful and user-friendly image generator tool",
  },
  {
    image: (className: string) => <GoogleIcon className={className} />,
    title: "Google Ad Headlines",
    description:
      "An article generator is a tool that automatically creates written content, providing a quick and convenient solution for content creation.",
  },
  {
    image: (className: string) => <SearchIcon className={className} />,
    title: "Meta Description",
    description:
      "Generate concise and relevant web contents, enhance SEO and user engagement.",
  },
  {
    image: (className: string) => <NotesIcon className={className} />,
    title: "Newsletter  Generator",
    description:
      "Create tailored newsletters to enhance audience engagement and communication.",
  },
];
