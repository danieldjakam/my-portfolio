import React from 'react'
import SectionHeader from '../ui/sectionHeader'
import Section from '../ui/Section'
import Grid from '../ui/Grid/Grid'
import GridElement from '../ui/Grid/GridElement'

function Services() {
    return (
        <Section title="My Services" description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptates possimus nihil adipisci perferendis eius, voluptatum iste ">
            <Grid>
                <GridElement/>
                <GridElement/>
                <GridElement/>  
                <GridElement/>
                <GridElement/>
                <GridElement/>
                <GridElement/>
            </Grid>
        </Section>
    )
}

export default Services