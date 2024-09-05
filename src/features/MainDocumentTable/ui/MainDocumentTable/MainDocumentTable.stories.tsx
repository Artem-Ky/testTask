import { StoryFn, Meta } from '@storybook/react';
import { Theme } from 'shared/const/theme';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { MainDocumentTable } from './MainDocumentTable';

export default {
    title: 'features/MainDocumentTable',
    component: MainDocumentTable,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof MainDocumentTable>;

const Template: StoryFn<typeof MainDocumentTable> = (args) => <MainDocumentTable {...args} />;

export const Light = Template.bind({});
Light.args = {
   
};

export const Dark = Template.bind({});
Dark.args = {

};
Dark.decorators = [ThemeDecorator(Theme.DARK)];