const fetchInitialGoals = async() => {
try {
    const taskResource = await aptos.getAccountResource(
      {
        accountAddress:account?.address,
        resourceType:`${moduleAddress}::habit_trackerv1::Task`
      }
    );

    console.log(taskResource);
    }
    catch(e){
        console.log(e);
    }
}