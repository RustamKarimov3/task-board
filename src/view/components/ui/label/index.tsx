import React, { useMemo } from 'react';
import { createCn } from 'bem-react-classname';

import './styles.scss';

type Props = {
    text: string;
    size?: 's' | 'm' | 'l';
    isBold?: boolean;
    className?: string;
}

export const Label: React.FC<Props> = ({ size = 's', text, isBold = false, className}) => {
    const cn = useMemo(
        () => createCn('label', className),
        [className]
    );

    return (
        <span className={ cn({ size, bold: isBold }) }>
            { text }
        </span>
    );
};