import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import Title from '.';

const meta: Meta<typeof Title> = {
    title: 'UI/Title',
    component: Title,
};

export default meta;

type Story = StoryObj<typeof Title>;

export const H1: Story = {
    render: args => (
        <Title {...args} />
    ),
    args: {
        level: 1,
        text: 'Some Text',
    },
};

export const H2: Story = {
    render: args => (
        <Title {...args} />
    ),
    args: {
        level: 2,
        text: 'Some Text',
    },
};

export const H3: Story = {
    render: args => (
        <Title {...args} />
    ),
    args: {
        level: 3,
        text: 'Some Text',
    },
};

export const H4: Story = {
    render: args => (
        <Title {...args} />
    ),
    args: {
        level: 4,
        text: 'Some Text',
    },
};

