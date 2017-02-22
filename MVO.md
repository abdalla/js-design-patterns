#MODEL VIEW OCTOPUS (MVO)#

##VIEW##
Basically, this is the user's interface to your application, both for giving your application data and for reading data.

##MODEL##
Here in the model, this is where all of the data is stored.

That includes data from the server and from the user.

##OCTOPUS##
Where the model and the view are connected, also keeps them separate enough to allow changes in individual pieces without upsetting the rest.

In other words, I can change my view here without disturbing my model. Or I can change the way I'm storing my data without disturbing my view over here.

OCTOPUS = *M***C**, *MV***VM**, *MV***P** and *MV**

##CONCLUSION##
Fundamentally, the C, VM, P, and asterisk are all solving the same problem, separating our model from our view.
