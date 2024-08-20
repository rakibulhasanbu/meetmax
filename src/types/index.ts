export type TTokenUser = {
  id: string;
  email: string;
  name: string;
  image: string;
};

export interface TPost {
  id: string;
  postBy: {
    userId: number;
    name: string;
    image: string;
  };
  description: string;
  images: { url: string }[];
  isPublish?: boolean;
  liked?: number;
  comments?: any;
  share: number;
  visibleBy?: "Friends" | "Public";
  createdAt: string;
}

export const USER_ROLE = {
  admin: "admin",
  user: "user",
} as const;

export const NotificationType = {
  comment: "comment",
  reply: "reply",
  like: "like",
};

export type TUserRole = keyof typeof USER_ROLE;

export interface Activity {
  total_likes: number;
  total_comments: number;
  total_reads: number;
  total_parent_comments: number;
}

export interface TNotification {
  deletedDocCount: string;
}
