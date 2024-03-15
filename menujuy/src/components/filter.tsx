import Category from "../JSON/Category.json"
import { IFilter } from "../Model/M_Filter"
import * as React from 'react';

import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';



interface FilterOptionsProps {
    fnFilter: (filter: IFilter) => void;
}

const FilterLayout = (FilterOption: FilterOptionsProps) => {
    const { fnFilter } = FilterOption;
    let FilterOptions: IFilter = {
        TYPE_ID: null,
    } as IFilter;

    const Filter_TYPE = (e: SelectChangeEvent) => {
        FilterOptions.TYPE_ID = e.target.value === "" ? null : parseInt(e.target.value);
        fnFilter(FilterOptions);
    }
    return (
        <FormControl sx={{ m: 1, minWidth: 300 }}>
            <InputLabel id="demo-simple-select-standard-label">ประเภทเมนูอาหาร</InputLabel>
            <Select
                labelId="demo-select-small-label"
                key={"TYPE"}
                id="SEL_TYPE"
                label="ประเภทเมนูอาหาร"
                onChange={Filter_TYPE}>
                <MenuItem value="">
                    <em>เลือกหมวดหมู่อาหาร</em>
                </MenuItem>
                {Category.map((x) => (
                    <MenuItem key={`CATE_${x.TYPE_ID}`} value={x.TYPE_ID}>
                        <em>{x.TITLE}</em>
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default FilterLayout;