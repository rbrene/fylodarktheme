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

export type FooterLinkProps = {
    text: string;
}

export type SocialLinkProps = {
    icon: 'facebook' | 'twitter' | 'instagram'
}

export type ButtonProps = {
    type?: string | undefined;
    children: string | React.ReactNode;
}