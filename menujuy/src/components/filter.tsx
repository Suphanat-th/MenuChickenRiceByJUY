"use client"
import { useEffect, useState, useRef } from 'react';

// MUI
import { Autocomplete, TextField, FormControl, InputLabel, Box, Stack } from "@mui/material";
import { styled, lighten, darken } from '@mui/system';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

//Interface
import { IFilter } from "@/Model/M_Filter"
import { IMenu } from '@/Model/M_Menu';
import { ICategory } from "../Model/M_Category";
import { useAppContext } from './AppWarpper';

const GroupHeader = styled('div')(({ theme }) => ({
    position: 'sticky',
    top: '-8px',
    padding: '4px 10px',
    color: "#bfdbfe",
    backgroundColor: "#3b82f6",
}));


const GroupItems = styled('ul')({
    padding: 0,
});


const FilterLayout = () => {
    const { getMainMenu, getFilter, setFilter, getListMenu, setListMenu, getListCategory } = useAppContext();

    let ListCategory: ICategory[] = getListCategory;
    let ListMenu: IMenu[] = getListMenu;
    let MainMenu: IMenu[] = getMainMenu;
    let Filter: IFilter = getFilter;


    const listMenuOptions = ListMenu.map((option) => {
        const firstLetter = ListCategory.find(x => x.TYPE_ID === option.TYPE_ID)?.TITLE?.toString();
        return {
            firstLetter: firstLetter,
            ...option,
        };
    });

    const Filter_TYPE = (v: number) => {

        setFilter((prevFilter: IFilter) => ({
            ...prevFilter,
            TYPE_ID: v === undefined ? null : v
        }));
    }

    const Filter_ID = (v: number) => {
        setFilter((prevFilter: IFilter) => ({
            ...prevFilter,
            ID: v === undefined ? null : v
        }));
    }
    // useEffect(() => {

    //     let filteredMenu = MainMenu;

    //     if (getFilter.TYPE_ID != null) {
    //         filteredMenu = filteredMenu.filter(x => x.TYPE_ID === getFilter.TYPE_ID);
    //     }

    //     if (getFilter.ID != null) {
    //         filteredMenu = filteredMenu.filter(x => x.ID === getFilter.ID);
    //     }

    //     setListMenu(filteredMenu);
    // }, [getFilter.TYPE_ID, getFilter.ID, MainMenu]);




    useEffect(() => {

        let filteredMenu = MainMenu;

        if (getFilter.TYPE_ID != null && getFilter.ID != null) {
            filteredMenu = filteredMenu.filter(x => x.TYPE_ID === getFilter.TYPE_ID && x.ID === getFilter.ID);
        } else if (getFilter.TYPE_ID != null && getFilter.ID == null) {
            filteredMenu = filteredMenu.filter(x => x.TYPE_ID === getFilter.TYPE_ID);
        } else if (getFilter.TYPE_ID == null && getFilter.ID != null) {
            filteredMenu = filteredMenu.filter(x => x.ID === getFilter.ID);
        }
        // else if(getFilter.TYPE_ID == null && getFilter.ID != null){
        //     filteredMenu = filteredMenu.filter(x => x.TYPE_ID === getFilter.TYPE_ID && x.ID === getFilter.ID);
        // }


        window.scrollTo(0, 0);
        setListMenu(filteredMenu);
    }, [getFilter.TYPE_ID, getFilter.ID, MainMenu]);

    return (
        <div className="mt-3 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">

            <Autocomplete
                id="sel_category"
                className="w-full"
                size="small"
                options={ListCategory}
                autoHighlight
                getOptionLabel={(option) => option.TITLE!}
                renderOption={(props, option) => (
                    <Box
                        component="li" {...props}
                        key={`sel_category_${option.TYPE_ID}`}
                    >
                        {option.TITLE}
                    </Box>
                )}
                isOptionEqualToValue={(option, value) => option.TYPE_ID === value.TYPE_ID}
                onChange={(e, v) => {
                    Filter_TYPE(v?.TYPE_ID!)
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="โปรดเลือกประเภทอาหาร"
                        inputProps={{
                            ...params.inputProps
                        }}
                    />
                )}
            />

            <Autocomplete
                id="sel_menu"
                className="w-full"
                size="small"
                options={listMenuOptions.sort((a, b) => -b!.firstLetter!.localeCompare(a!.firstLetter!))}
                groupBy={(option) => option!.firstLetter!}
                autoHighlight
                getOptionLabel={(option) => option.TITLE}
                renderOption={(props, option) => (
                    <Box component="li"
                        sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}
                        key={`sel_menu_${option.TYPE_ID}_${option.ID}`}
                    >
                        {option.TITLE}
                    </Box>
                )}
                isOptionEqualToValue={(option, value) => option.TYPE_ID === value.TYPE_ID}
                onChange={(e, v) => {
                    Filter_ID(v?.ID!)
                }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="โปรเลือกเมนูอาหาร"
                        inputProps={{
                            ...params.inputProps
                        }}
                    />
                )}

                renderGroup={(params) => (
                    <li key={params.key}>
                        <GroupHeader>{params.group}</GroupHeader>
                        <GroupItems>{params.children}</GroupItems>
                    </li>
                )}

            />
        </div>
    );
};

export default FilterLayout;