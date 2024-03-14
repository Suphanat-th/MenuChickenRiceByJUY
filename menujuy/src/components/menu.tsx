import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';

import { IMenu } from "../Model/M_Menu"
import { X } from '@mui/icons-material';

interface DataProps {
    data: Array<IMenu>;
}

const menu: React.FC<DataProps> = ({ data }) => {
    return (
        <div>
            {data.map((x) => (
                <li key={`section-${x.ID}`}>
                    <ul>
                        <ListSubheader>{`I'm sticky ${x}`}</ListSubheader>
                        {[0, 1, 2].map((item) => (
                            <ListItem key={`item-${item}-${item}`}>
                                <ListItemText primary={`Item ${item}`} />
                            </ListItem>
                        ))}
                    </ul>
                </li>
            ))}
        </div>
    )
}
export default menu;