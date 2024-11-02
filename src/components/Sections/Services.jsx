import React from 'react'
import Section from '../ui/Section'
import Grid from '../ui/Grid/Grid'
import GridElement from '../ui/Grid/GridElement'
import { Javascript, Terminal } from '@mui/icons-material'

function Services() {
    return (
        <Section title="My Services" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptates possimus nihil adipisci perferendis eius, voluptatum iste ">
            <Grid>
                <GridElement icon={<Javascript  sx={{fontSize: 80}}/>} title={"Web Development"} desription={"Blog, E-commerce, Portfolio, ..."}/>
                <GridElement icon={<Terminal    sx={{fontSize: 80}}/>} title={"Web Development"} desription={"Blog, E-commerce, Portfolio, ..."}/>
                <GridElement icon={<Javascript  sx={{fontSize: 80}}/>} title={"Web Development"} desription={"Blog, E-commerce, Portfolio, ..."}/>
                <GridElement icon={<Javascript  sx={{fontSize: 80}}/>} title={"Web Development"} desription={"Blog, E-commerce, Portfolio, ..."}/>
                <GridElement icon={<Javascript  sx={{fontSize: 80}}/>} title={"Web Development"} desription={"Blog, E-commerce, Portfolio, ..."}/>
                <GridElement icon={<Javascript  sx={{fontSize: 80}}/>} title={"Web Development"} desription={"Blog, E-commerce, Portfolio, ..."}/>
                <GridElement icon={<Javascript  sx={{fontSize: 80}}/>} title={"Web Development"} desription={"Blog, E-commerce, Portfolio, ..."}/>
            </Grid>
        </Section>
    )
}

export default Services