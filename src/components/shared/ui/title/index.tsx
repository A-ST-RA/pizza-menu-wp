/* eslint-disable xss/no-mixed-html */
import clsx from 'clsx';
import React from 'react';

import cn from './style.module.sass';

// eslint-disable-next-line no-magic-numbers
type level = 1 | 2 | 3 | 4;

interface ITitleProps {
    level: level;
    text: string;
    customClass: string;
}

type header = `h${level}`;

function Title({ level, text, customClass }: ITitleProps) {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    const Tag = `h${level}` as header;

    return (
        <Tag className={clsx(cn[Tag], customClass)} dangerouslySetInnerHTML={{ __html: text }} />
    );
}

export default Title;
