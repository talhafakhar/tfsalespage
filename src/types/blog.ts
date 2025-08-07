export interface BlogPost {
    id: number;
    documentId: string;
    title: string;
    content: {
        type: string;
        children: string[];
    }[];
    excerpt: string;
    slug: string;
    tags: string;
    publishedAt: string;
    published: string;
    createdAt: string;
    updatedAt: string;
    feature_image?: {
        url: string;
    };
}

export interface BlogResponse {
    data: BlogPost[];
    meta: {
        pagination: {
            page: number;
            pageSize: number;
            pageCount: number;
            total: number;
        };
    };
}