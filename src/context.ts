import React from 'react'
import { type Game, init } from './models/Game'
export const Context = React.createContext<Game>(init())
