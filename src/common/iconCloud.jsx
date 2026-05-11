import { useEffect, useMemo, useState } from "react";
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";
import PropTypes from 'prop-types';
import { useTheme } from './ThemeContext';

const cloudProps = {
    containerProps: {
        style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
            minHeight: "320px",
            overflow: "hidden",
        },
    },
    options: {
        reverse: true,
        depth: 0.85,
        wheelZoom: false,
        imageScale: 1.75,
        activeCursor: "default",
        tooltip: "native",
        initial: [0.08, -0.08],
        clickToFront: 500,
        tooltipDelay: 0,
        outlineColour: "#0000",
        maxSpeed: 0.04,
        minSpeed: 0.03,
    },
};

const renderCustomIcon = (icon, theme) => {
    const bgHex = theme === "light" ? "#f7f9fb" : "#0b0f14";
    const fallbackHex = theme === "light" ? "#354052" : "#f5f7fb";
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
        return <div style={{ color: 'var(--muted-text-color)' }}>Error loading icons: {error.message}</div>;
    }

    if (!renderedIcons) {
        return <div style={{ color: 'var(--muted-text-color)' }}>Loading icons...</div>;
    }

    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                minHeight: 320,
                display: 'grid',
                placeItems: 'center',
                overflow: 'hidden',
            }}
        >
            <Cloud {...cloudProps}>
                {renderedIcons}
            </Cloud>
        </div>
    );
}

IconCloud.propTypes = {
    iconSlugs: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default IconCloud;
