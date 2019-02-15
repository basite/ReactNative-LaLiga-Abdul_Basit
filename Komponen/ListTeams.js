import React from 'react';
import axios from 'axios';
import { ScrollView } from 'react-native';
import { Container, Header, Left, Body, Right, Title, Footer, Content, Icon, Button, Item, Input, Text, ListItem, List, Spinner, Thumbnail } from 'native-base';

class ListTeams extends React.Component {

    state = {
        listTeams: "",
        isLoading: false
    }

    // styling header
    static navigationOptions = {
        title: "La Liga Teams",
        headerStyle: {
            backgroundColor: "purple"
        },
        headerTintColor: "white"
    }

    // load data team di la liga
    componentDidMount() {
        this.setState({
            isLoading: true
        });

        axios.get('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain').then((x) => {
            this.setState({
                listTeams: x.data.teams,
                isLoading: false
            });
        });
    }

    displayTeams() {
        return this.state.listTeams.map((val, i) => {
            var idTeam = val.idTeam;
            var teamName = val.strTeam;
            var teamWebsite = val.strWebsite;
            var teamLogo = val.strTeamBadge

            return (
                <ListItem key={i} avatar onPress={() => {
                    this.props.navigation.navigate("ListPlayers", {
                        idTeam: idTeam,
                        teamName: teamName
                    })
                }}>
                    <Left>
                        <Thumbnail source={{ uri: teamLogo }} />
                    </Left>
                    <Body>
                        <Text>{teamName}</Text>
                        <Text note>{teamWebsite}</Text>
                    </Body>
                    {/* <Right>
                    </Right> */}
                </ListItem>
            )
        })
    }

    render() {
        return (
            <Container>
                <ScrollView>
                    <List>
                        {this.state.isLoading ? <Spinner /> : this.state.listTeams ? this.displayTeams() : <Text></Text>}
                    </List>
                </ScrollView>
            </Container>
        )
    }
}

export default ListTeams;

