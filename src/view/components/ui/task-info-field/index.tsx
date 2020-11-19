import React, { useMemo } from 'react';
import { createCn } from 'bem-react-classname';

import Label from '../label';

import './styles.scss';

type Props = {
    fieldName: string;
    fieldValue: string | number;
    className?: string;
}

const TaskInfoField: React.FC<Props> = ({ fieldName, fieldValue, className}) => {
    const cn = useMemo(
        () => createCn('task-info-field', className),
        [className]
    );

    return (
        <div className={ cn() }>
            <Label className={ cn('field-name') } size='s'>
                { `${fieldName}: ` }
            </Label>
            <Label className={ cn('field-value') } isBold={true} size='s'>
                { fieldValue }
            </Label>
        </div>
    );
};

export default React.memo(TaskInfoField);