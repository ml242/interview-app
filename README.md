## Hello Ubiquiti!

Here is the code for the take home assignment running at [Interview App](https://interview-app.pages.dev/)

Please feel free to pull this repo and to run it on your local devices as well.

```
   git clone git@github.com:ml242/interview-app.git
   npm i
   npm run dev
```

It was a fun assignment with a lot to explore. As it was also pretty open ended for the instructions I have made the biggest impact I could with my NN hours.

1. All of the logic is done for filtering, searching, etc.

2. The markup is complete while also being somewhat mobile friendly (which was neglected on the Figma)

3. The technologies I have used are Vite and Tailwind as both of them "get out of your way" and would be easy for the team taking the handoff to incorporate more specific UI libraries for theming, icons, or if there were additional needs like SSR.

4. I did leverage one UI toolkit from Ant Design to make the combobox. This is a simple lib. With another day I would have architected a custom component like the Filter Box. It would work the same way, taking in the list of data, filtering by name and tag, combing the results, and then printing the child element to the dom with the name and tag. To underline the matched part of the string would take a simple helper and a bit of css in the span.

Regardless, these decisions were guided by the instructions - it was hinted that this app is more of an internal tool than a public facing application and the time limit.

I'd be happy to explore it more with more time to add more specialized drop shadows, ui, the custom combo box, etc.

Hope you enjoy,

Matt
