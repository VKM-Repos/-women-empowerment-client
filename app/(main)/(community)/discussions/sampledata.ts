import DiscussionImage from '../../../../public/images/img_womanpowerfitness.png';
import EventImage from '../../../../public/images/img_womanpowersitting.png';
import NewsImage from '../../../../public/images/img_womanpowerfitness.png';


interface DiscussionProps {
  id: string;
  image?: string;
  title: string;
  author: string;
  description: string;
  createdAt: string;
  comments: number;
}

interface EventProps {
  id: string;
  image?: string;
  title: string;
  author: string;
  createdAt: string;
  status: string;
}

interface NewsProps {
  id: string;
  image?: string;
  title: string;
  readTime: string;
}


// Sample data for DiscussionProps
const discussionData: DiscussionProps[] = Array.from({ length: 10 }, (_, index) => ({
  id: `${index + 1}`,
  image: DiscussionImage.src,
  title: `Appropriate handling of women affairs`,
  author: `Author ${index + 1}`,
  description: `i have personally felt “female-shamed” if there is any word like that.I love the fact this space was created.`,
  createdAt: `2023-01-${10 + index}T${8 + index}:30:00Z`,
  comments: 10 + index,
}));

// Sample data for EventProps
const eventData: EventProps[] = Array.from({ length: 5 }, (_, index) => ({
  id: `${index + 1}`,
  image: EventImage.src,
  title: `Internet and safety with girls in ICT`,
  author: `Women in Tech`,
  createdAt: `2023-02-${15 + index}T${10 + index}:00:00Z`,
  status: index % 2 === 0 ? 'Online' : 'Upcoming',
}));

// Sample data for NewsProps
const newsData: NewsProps[] = Array.from({ length: 5 }, (_, index) => ({
  id: `${index + 1}`,
  image: NewsImage.src,
  title: `Important Safety Concerns For Women In Gyms`,
  readTime: `${5 - index} min`,
}));

export { discussionData, eventData, newsData };