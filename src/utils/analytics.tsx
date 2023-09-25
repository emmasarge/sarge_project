declare global {
    interface Window {
        dataLayer: any[];
    }
}

export const ClickPortfolioViewAnalytics = (page_section: string) => {
    window.dataLayer.push({
        event: 'click_view_portfolio',
        page_section: page_section
    });
}

export const ClickViewGitHubAnalytics = () => {
    window.dataLayer.push({
        event: 'click_view_github',
    });
}

export const ClickLinkedInAnalytics = () => {
    window.dataLayer.push({
        event: 'click_view_linkedin',
    });
}

export const TrafficSourceAnalytics = (source: string, medium:string, campaign:string) => {
    window.dataLayer.push({
        event: 'traffic_source',
        source: source,
        medium: medium,
        campaign: campaign
    });
}