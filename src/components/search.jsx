import React, {useState} from 'react'
import {Grid, Form, Input} from 'semantic-ui-react'

const search = ({setSearchedQuery}) => {

    const [search, setSearch] = useState('')

    const onFromSubmit = () =>{
        setSearchedQuery(search)
    }

  return (
   <Grid column={2} textAlign='center' className='search-box'>
    <Grid.Column>
        <h2 className='search-heading font-semibold text-3xl'>Search recipes with <span className=' text-pink-500'>Vishal</span></h2>
        <Form onSubmit={onFromSubmit}>
            <Input
             placeholder='Search Recipes'
             action={{icon: 'search', color:'pink'}}
             value={search}
             onChange={(e)=> setSearch(e.target.value)}
            />
        </Form>
    </Grid.Column>
   </Grid>
  )
}

export default search
