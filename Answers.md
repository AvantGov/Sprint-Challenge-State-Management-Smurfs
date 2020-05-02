1. What problem does the context API help solve?

context API allows for nested components to easily pull and share data between one another without the need for props drilling. 

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions - if the action creator is a telegram operator, the actions in the system could be the hypothetical 'telegrams' that are dispatched across the application in order to invoke change and create a new version of state for the application to render components based on. 

reducers - the reducer can be seen as a team member who slices up state into the needed 'parts' invoked by the action and switch statement, who then makes a copy of the piece of state and returns a new version of state without mutation of the original state.

store - the store can best be seen as a source of truth that the entire application bases rendered components off of and delegates the updating of state as needed to the reducer. 

it is considered the 'singular source of truth' since the state is consistently being returned in its entirety as a new version, rather than state being modified be each component in a different manner--fragmenting the state and creating many sources of truth throughtout the application. 

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

application state refers to the idea there is a universal store of information that any part of the application can access at any given time, and will always provide the singular 'truth' to all parts of the application. Component state referes to the state held within the scope of a component that can and will be passed around thoughout the application, which can cause for fragmented versions of state throughout the application.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk allows for the action creator to return functions as their output, while still remaining pure functions. 

1. What is your favorite state management system you've learned and this sprint? Please explain why!

I enjoy the redux arcitecture the most since it provides the greatest amount of functionality out of the box. Though it does feel clunky when working with smaller applications, the potential to scale becomes exponentially more increased with the redux flow, rather than worrying about the fragmented situations other arcitecture patterns display at scale. 
