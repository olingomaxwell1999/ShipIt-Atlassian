import api, { route } from "@forge/api";
import ForgeUI, { render, Fragment, Text, IssuePanel, useProductContext, useState, ModalDialog, Button } from "@forge/ui";


const fetchCommentsForIssue = async (issueIdOrKey) => {
  const res = await api
    .asUser()
    .requestJira(route`/rest/api/3/issue/${issueIdOrKey}/comment`);

  const data = await res.json();
  console.log(data.comments)
  return data.comments;  
};

const App = () => {
  const context = useProductContext();
  const [comments] = useState(async () => await fetchCommentsForIssue(context.platformContext.issueKey));
  const [isOpen, setOpen] = useState(comments.filter(comment => comment.body.content[0].content[0].text.includes('Screenshot').length > 0));
  console.log(comments[0].body.content[0].content[0].text)

   return (
    <Fragment>
      {isOpen && (
        <ModalDialog header="My modal dialog" onClose={() => setOpen(false)}>
          <Text>You need a screenshot for your comment</Text>
      </ModalDialog>
      )}
      {/* <Text>Hello world!</Text> */}
    </Fragment>
  );


};


export const run = render(
  <IssuePanel>
    <App />
  </IssuePanel>
);
