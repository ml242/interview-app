## Hello Ubiquiti!

Here is the code for the take home assignment running at [Interview App](https://interview-app.pages.dev/)

Please feel free to pull this repo and to run it on your local devices as well.

```
   git clone git@github.com:ml242/interview-app.git
   npm i
   npm run dev
```

This was a fun challenge with a lot to explore. As it was also pretty open ended I have chosen to make the biggest impact I could with my NN hours.

1. All of the logic is done for filtering, searching, etc.

2. The markup is complete while also being somewhat mobile friendly (neglected on the Figma)

3. The technologies I have used are Vite and Tailwind as both of them "get out of your way" and would be easy for the team taking the handoff to incorporate more specific UI libraries for theming, icons, grids, or if there were additional needs like SSR.

4. I did leverage one toolkit from Ant Design to make the combobox. This is a simple lib. With another day I would have architected a custom component much like the Filter Box. It would work the same way, taking in the list of data, filtering by name and tag, combing the results, and then printing the child element to the dom with the name and tag. To underline the matched part of the string would needed a simple helper and a bit of css in the span. Clicking that would open the same product page as it does now.

Regardless, these decisions were guided by the instructions which omitted certain requirements and it was hinted that this app is more of an internal tool than a public facing application and acknowledging the fact that the API could be missing data, image sizes, etc, so I made it robust and provided graceful fallbacks. 

Hope you enjoy it, I look forward to speaking with you.

Matt
