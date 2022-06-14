const NavigationBar = () => {
    const navBarContainer = "navigation-bar__div";
    return (
        <div className={navBarContainer}>
            <ul>
                <li>Why GitHub?</li>
                <li>Team</li>
                <li>Enterprise</li>
                <li>Explore</li>
                <li>Marketplace</li>
                <li>Pricing</li>
            </ul>
        </div>
    );
};

export default NavigationBar;
