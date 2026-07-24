export interface Job {
  id: string;

  title: string;

  department: string;

  location: string;

  lastDate: string;

  posts: number;

  status: "Open" | "Closed";

  slug: string;
}