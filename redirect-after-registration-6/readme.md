# Redirect after Registration

This example demonstrates an application that allows a user to fill out a form.
- Users may abandon the form without loging in or registering. If they do, the form is lost.
- Users may save a form in progress before leaving. If they have an existing id, they will be asked to login before saving. If they don't, they will be sent to registration, and then redirected back to the form. 
- Users may resume a previously saved form. They must login with an existing id and choose a saved form.
- Users must have an id before submitting the form. On submit, they will be asked to sign in or register.

## Using this example
Download the keycloak javascript client library and typings file from the Red Hat support portal and install keycloak.js and keycloak.d.ts into the src/assets/ folder

https://access.redhat.com/jbossnetwork/restricted/softwareDownload.html?softwareId=93341&product=core.service.rhsso

An example script to unpack the files into the local dir
```
for file in keycloak{.js,.d.ts}; do unzip -p ~/Downloads/rh-sso-7.4.5-js-adapter.zip rh-sso-7.4-js-adapter/$file > $file; done
```
