import React, { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";
import PropTypes from 'prop-types';

const cloudProps = {
    containerProps: {
        style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            paddingTop: 10,
            minHeight: '200px', // Ensure some height
            maxHeight: '350px', // Ensure some height
        },
    },
    options: {
        reverse: true,
        depth: 1,
        wheelZoom: false,
        imageScale: 2,
        activeCursor: "default",
        tooltip: "native",
        initial: [0.1, -0.1],
        clickToFront: 500,
        tooltipDelay: 0,
        outlineColour: "#0000",
        maxSpeed: 0.04,
        minSpeed: 0.03,
    },
};

const renderCustomIcon = (icon, theme) => {
    const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
    const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
    const minContrastRatio = theme === "dark" ? 2 : 1.2;

    return renderSimpleIcon({
        icon,
        bgHex,
        fallbackHex,
        minContrastRatio,
        size: 42,
        aProps: {
            href: undefined,
            target: undefined,
            rel: undefined,
            onClick: (e) => e.preventDefault(),
        },
    });
};

function IconCloud({ iconSlugs }) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const { theme } = useTheme();

    useEffect(() => {
        fetchSimpleIcons({ slugs: iconSlugs })
            .then(setData)
            .catch((err) => {
                console.error("Failed to fetch icons:", err);
                setError(err);
            });
    }, [iconSlugs]);

    const renderedIcons = useMemo(() => {
        if (!data) return null;
        try {
            return Object.values(data.simpleIcons).map((icon) =>
                renderCustomIcon(icon, theme || "light")
            );
        } catch (err) {
            console.error("Error rendering icons:", err);
            return null;
        }
    }, [data, theme]);

    if (error) {
        return <div>Error loading icons: {error.message}</div>;
    }

    if (!renderedIcons) {
        return <div>Loading icons...</div>;
    }

    return (
        <Cloud {...cloudProps}>
            {renderedIcons}
        </Cloud>
    );
}

IconCloud.propTypes = {
    iconSlugs: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default IconCloud;