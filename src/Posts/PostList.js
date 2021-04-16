import * as React from "react";
import {
    List,Datagrid,
    TextField,ReferenceField,
    EditButton,Edit,
    Create,SimpleForm,
    ReferenceInput,SelectInput,
    TextInput,Filter,
    SimpleList,DateField
} from 'react-admin';
import { useMediaQuery } from '@material-ui/core';


export const PostList = props => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    return (
        <List {...props}>
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.title}
                    secondaryText={record => record.author}
                    tertiaryText={record => new Date(record.published_at).toLocaleDateString()}
                />
            ) :
            (
                <Datagrid>
                    <TextField source="title" />
                    <ReferenceField source="authorId" reference="authors">
                        <TextField source="name" /> 
                    </ReferenceField>
                    <TextField source="category" />
                    <DateField source="createdate" showTime={false}/>
                    <EditButton/>
                </Datagrid>
             )
            }   
        </List>
    );
}