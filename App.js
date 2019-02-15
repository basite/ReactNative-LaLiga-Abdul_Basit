import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ListTeams from './Komponen/ListTeams';
import ListPlayers from './Komponen/ListPlayers';
import PlayerDetails from './Komponen/PlayerDetails';



var AppNavigator = createStackNavigator(
  {
    ListTeams: ListTeams,
    ListPlayers: ListPlayers,
    PlayerDetails: PlayerDetails
  },
  {
    initialRouteName: "ListTeams"
  }
)

export default createAppContainer(AppNavigator);