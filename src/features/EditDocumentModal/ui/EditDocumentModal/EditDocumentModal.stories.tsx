import { StoryFn, Meta } from '@storybook/react';
import { Theme } from 'shared/const/theme';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { EditDocumentModal } from './EditDocumentModal';

export default {
    title: 'features/EditDocumentModal',
    component: EditDocumentModal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta<typeof EditDocumentModal>;

const Template: StoryFn<typeof EditDocumentModal> = (args) => <EditDocumentModal {...args} />;

export const Light = Template.bind({});
Light.args = {
   
};

export const Dark = Template.bind({});
Dark.args = {

};
Dark.decorators = [ThemeDecorator(Theme.DARK)];