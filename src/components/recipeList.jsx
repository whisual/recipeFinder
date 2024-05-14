import React from 'react'
import {Container, Header, Grid, Card, Button} from 'semantic-ui-react'

const recipeList = ({recipes, searchedQuery}) => {
  return (
    <div>
      <Container>
         <Header
           size= "huge"
           content={`Recipe List for ${searchedQuery}`}
           textAlign='center'
         />
         <Grid columns={4} doubling>
          {
            recipes && recipes.map(recipe => (
              <Grid.Column>
                <Card style={{height: 350}} >
                  <img src={recipe.image_url} alt="thumbnail" style={{height: 200}} />
                  <Card.Content>
                    <Card.Header content={recipe.title}/>
                    <Card.Description>
                      <h4>{recipe.publisher}</h4>
                    </Card.Description>
                  </Card.Content>
                  <Card.Content>
                  <Button href={recipe.source_url} target='_blank'  content="Details" size='tiny' color='pink'/>
                  </Card.Content>
                </Card>
              </Grid.Column>
            ))
          }
         </Grid>
      </Container>
    </div>
  )
}

export default recipeList
