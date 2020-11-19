import React, { useMemo } from 'react';
import { createCn } from 'bem-react-classname';

import './styles.scss';

type Props = {
    children: React.ReactNode;
    size?: 's' | 'm' | 'l';
    isBold?: boolean;
    className?: string;
}

const Label: React.FC<Props> = ({ size = 's', isBold = false, className, children }) => {
    const cn = useMemo(
        () => createCn('label', className),
        [className]
    );

    return (
        <span className={ cn({ size, bold: isBold }) }>
            { children }
        </span>
    );
};

export default React.memo(Label);