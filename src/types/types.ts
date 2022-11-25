export type NavItemProps = {
    text: string;
}

export type FeatureCardProps = {
    data: {
        id: number;
        icon: string;
        heading: string;
        description: string;
    }
}

export type LinkProps = {
    to: string;
    text: string;
}

export type TestimonialProps = {
    data: {
        id: number;
        image: string;
        name: string;
        occupation: string;
        text: string;
    }
}