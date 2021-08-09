---
title: Docs
permalink: /docs/
description: Instructions on how to make awesome things with JustSketchMe
class: text-container docs
---

JustSketchMe can be used to set up reference scenes and poses for planning out your work before putting pen to paper (or pencil to tablet). There are a variety of tools and resources at your disposal which we will cover in the following sections. 

- [Models](#models)
- [Gizmos](#gizmos)
    - [Rotate](#rotate)
    - [Move](#move)
    - [Scale](#scale)
- [Tab tools](#tabs)
    - [Duplicate](#duplicate)
    - [Flip](#flip)
    - [Hide joints](#hide-joints)
    - [Delete](#delete)
- [Lighting](#lighting)
    - [Move light source](#move-light-source)
    - [Adjust ambient light](#adjust-ambient-light)
    - [Adjust spot light](#adjust-spot-light)
    - [Hard/soft shadows](#hardsoft-shadows)
- [Scene tools](#scene-tools)
    - [Dark mode](#dark-mode)
    - [Outline effect](#outline-effect)
    - [Floor grid](#floor-grid)
    - [Adjust field of view](#field-of-view)
- [Poses](#poses)
    - [Save/load poses](#saveload-poses)
    - [Pose library](#post-library)
    - [Hand pose library](#hand-pose-library)
- [Scenes](#scenes)
    - [Save/load scenes](#saveload-scenes)
- [Props](#props)
    - [Adding props](#adding-props)
    - [Modifying props](#modifying-props)
    - [Images as props](#images-as-props)
    - [Lock prop](#lock-prop)
- [Other tools](#other-tools)
    - [Undo/redo](#undoredo)
    - [Place on ground](#place-on-ground)
    - [Hide all tools](#hide-all-tools)
    - [Lock screen](#lock-screen)
- [Export options](#export-options)
    - [Take screenshot](#take-screenshot)
    - [Export 3D model](#export-3d-model)
- [Apps](#apps)
    - [iOS](#ios)
    - [Android](#android)
    - [Mac & Windows](#mac--windows)
- [Subscriptions](#subscriptions)
    - [License key](#license-key)
    - [Devices](#devices)
    - [Manage subscription](#manage-subscription)
    - [Cancel subscription](#cancel-subscription)

---

## Models

There are many different models and characters that are available. The scene comes loaded with the female base model by default. You can add more characters and models to the scene by selecting the <span class="app-tool"><svg><use xlink:href="/images/feather-sprite.svg#users" /></svg></span> button in the top left, and selecting a model. There are different categories of model in selectable tabs along the top. 

---

## Gizmos

Gizmos are tools that allow you to manipulate objects (models or props) in the scene. They can be thought of as different modes of interacting with the scene. They can be found at the bottom right corner of the screen. Once a gizmo is selected you can select a joint or object by clicking it. Right clicking or clicking away will deselect that joint or object. 

### Rotate

<span class="app-tool"><svg><use xlink:href="/images/feather-sprite.svg#disc" /></svg></span>
This tool allows you to rotate any joint on a character model into the desired position. This is used to posing the models and rotating props. It is the mode that is active by default and can be re-activated by selecting the button or using the shortcut `Q`. You can select and drag an individual axis (the coloured circles) or free rotate by selecting anywhere inside the sphere and dragging. 

### Move

<span class="app-tool"><svg><use xlink:href="/images/feather-sprite.svg#move" /></svg></span>
This tool allows you to move a character model or prop around the scene. Activate it by selecting the button or using the shortcut `W`. You can select and drag an axis to move it on one axis, or select the square to move it along a plane (2 axis). 

### Scale

<span class="app-tool"><svg><use xlink:href="/images/feather-sprite.svg#maximize-2" /></svg></span>
This tool allows you to scale a character model or prop. Activate it by selecting the button or using the shortcut `E`. You can select and drag an axis to scale it along just that axis. Use the semi-transparent squares at the end of each axis to scale the whole model uniformly. 

---

## Tab tools

These tabs show up in the left side of the screen when new objects are added to the scene. They have tools specific to those objects in them. You can select the model by clicking the image in the tab. 

### Duplicate

<span class="app-tool"><svg><use xlink:href="/images/feather-sprite.svg#copy" /></svg></span>
This will duplicate the object in the scene and create a perfect copy next to it. This is useful for creating multiple props for repetitive constructs (think bars of a prison cell), or for generating multiple characters doing the same thing (think marching soldiers). 

### Flip

<span class="app-tool"><svg><use xlink:href="/images/feather-sprite.svg#repeat" /></svg></span>
This will flip your model horizontally for a perfect mirror image. This is useful for mirroring poses from the pose library (think running).

### Hide joints

<span class="app-tool"><svg><use xlink:href="/images/feather-sprite.svg#eye" /></svg></span>
This will toggle disable/enable and hide/show all the joints on the model so that your scene is cleaner when working on other models. It prevents accidental manipulation of models you're happy with. 

### Delete

<span class="app-tool"><svg><use xlink:href="/images/feather-sprite.svg#trash" /></svg></span>
This will remove the object from the scene.

---

## Lighting

The program gives you granular control over the scene lighting intensity, direction and type.

### Move light source

There is a yellow sphere in the scene that once selected can be moved around the scene using the [move gizmo](#move).

### Adjust ambient light

In the settings menu <span class="app-tool"><svg><use xlink:href="/images/feather-sprite.svg#settings" /></svg></span> in the top right there is a slider to adjust the ambient light 🔆 intensity. Ambient lighting removes shadows as the intensity increases. 

### Adjust spot light

In the settings menu <span class="app-tool"><svg><use xlink:href="/images/feather-sprite.svg#settings" /></svg></span> in the top right there is a slider to adjust the spot light 💡 intensity. The spot light direction comes from the position of the light soure in the scene. Spot lighting creates shadows as the intensity increases. 

### Hard/soft shadows

In the settings menu <span class="app-tool"><svg><use xlink:href="/images/feather-sprite.svg#settings" /></svg></span> in the top right you can enable or disable hard shadows 👤 on the model. Hard shadows give more shadow information. Note that enabling hard shadows may cause lagging on older devices. 

---

## Scene tools

These tools give you access to extra functionality in the scene and can all be found in the settings menu <span class="app-tool"><svg><use xlink:href="/images/feather-sprite.svg#settings" /></svg></span> in the top right.

### Dark mode

🌚 Toggle dark mode gives a dark background and menus for reducing eye-strain. 

### Outline effect

🖊 Toggling the outline effect disables or enables the dark outline effect on all the objects in scene. 

### Floor grid

🌐 Toggling this option enables or disables the floor grid in the scene. 

### Adjust field of view

🎥 This slider allows you to set a more extreme field of view to get more intense perspective in the scene (think giant fist perspective).

---

## Poses

Poses are how character models are posed according to the rotation of their joints. When you rotate a models joints you are "posing" that model. 

### Save/load poses

When you're happy with a pose and want to save it for later use, open the pose menu <span class="app-tool"><svg><use xlink:href="/images/feather-sprite.svg#user" /></svg></span> in the bottom right and click `Save pose`. This will save your pose in the cloud and you will see it appear beneath the save button. Giving the pose a category when you save it will group your related poses together in an accordion menu. 

You can load that pose by clicking the saved pose. 

### Pose library

The pose library has 200+ pre-built poses for you to use. It can be found in the pose menu <span class="app-tool"><svg><use xlink:href="/images/feather-sprite.svg#user" /></svg></span> by selecting the `Pose library` tab. Select a character then click the pose in the pose library to apply it to that character. 

### Hand pose library

There are 20+ pre-built hand poses so that you don't need to fiddle around with all the niggly little joints on the hands. These can be found in the hand pose menu <span class="app-tool"><svg><use xlink:href="/images/feather-sprite.svg#thumbs-up" /></svg></span> in the bottom right. Click either `Left` or `Right` to apply that pose to either the left or right hand of the model. 

---

## Scenes

Full scenes with models, props, light settings and perspective info can be saved and revisited at a later time or on another device. 

### Save/load scenes

When you're happy with the layout of your scene you can save it by going to the scenes menu <span class="app-tool"><svg><use xlink:href="/images/feather-sprite.svg#image" /></svg></span> in the bottom right of the screen and clicking `Save scene`. The scene name will then appear beneath the save button and can be loaded by clicking it. You can group scenes together using categories when saving. This will create an accordion menu of scenes. 

---

## Props

Props are shapes that can be scaled and moved around in scene to illustrate certain things. They can be used to create large backgrounds (think buildings), or smaller foreground objects (think tables or coffee cups). 

### Adding props

Open the props menu <span class="app-tool"><svg><use xlink:href="/images/feather-sprite.svg#box" /></svg></span> in the top left corner of the screen and select the shape you would like to import into the scene. 

### Modifying props

Props can be modified using the [gizmos](#gizmos) in the bottom right corner. The props can be scaled along certain planes, moved around, and rotated according to the specific function of the prop. 

### Images as props

Images can be uploaded and used as props. Select the upload image <span class="app-tool"><svg><use xlink:href="/images/feather-sprite.svg#upload" /></svg></span> button in the top left and select an image from your device to upload. Note that no images larger than 2mb are allowed. 

Image props handle transparency so can be used as props (think a picture of a sword as a sword prop). They can also be scaled up and used as a background image to help with perspective. 

### Lock prop

In the tabs on the left a prop has a lock <span class="app-tool"><svg><use xlink:href="/images/feather-sprite.svg#lock" /></svg></span> option. Select this to lock a prop and make it unselectable so it isn't accidentally modified once you're happy with it. 

---

## Other tools

There are a few other tools that are useful for setting up a scene. 

### Undo/redo

These two tools work as expected, undoing or redoing the last action. They are available using <span class="app-tool"><svg><use xlink:href="/images/feather-sprite.svg#corner-up-left" /></svg></span> or <span class="app-tool"><svg><use xlink:href="/images/feather-sprite.svg#corner-up-right" /></svg></span> in the top left, or using `Ctrl+Z` or `Ctrl+Shift+Z`.

### Place on ground

This tool places the active object on the ground (floor grid). Select the object you want to place on the ground then click the place on ground button <span class="app-tool"><svg><use xlink:href="/images/feather-sprite.svg#chevrons-down" /></svg></span> in the top right of the screen or using the shortcut `J`. 

### Hide all tools

This tool hides all the joints and active gizmos in the scene so you can observe it without all the clutter. Select the hide tools button <span class="app-tool"><svg><use xlink:href="/images/feather-sprite.svg#eye" /></svg></span> in the top right corner or using the shortcut `K` to toggle.

### Lock screen

This tool locks the camera of the scene in place so as to not accidentally move it if you've found the perfect perspective. You can toggle the camera lock using the button <span class="app-tool"><svg><use xlink:href="/images/feather-sprite.svg#lock" /></svg></span> in the top right of the screen or using the shortcut `L`.

---

## Export options

There are multiple ways to export scenes and objects.

### Take screenshot

To take a screenshot of the scene with transparency open the export menu <span class="app-tool"><svg><use xlink:href="/images/feather-sprite.svg#download" /></svg></span> and click `Take screenshot`. This will save the screenshot as a png image. 

### Export 3D model

To export the selected character as a 3D model open the export menu <span class="app-tool"><svg><use xlink:href="/images/feather-sprite.svg#download" /></svg></span> and click either `Export model as .dae` or `Export model as .obj`. 

Note that full scene 3D model exports are not available just yet. You can currently only export the active character model in the scene. 

---

## Apps

JustSketchMe runs on all devices in web browser, as well as locally on all devices either as a Progressive Web App, or as a native application.

### iOS

To download the app on iOS:

- Open the JustSketchMe webapp in Safari
- Tap the Share button <span class="app-tool"><svg><use xlink:href="/images/feather-sprite.svg#share" /></svg></span> in the Safari toolbar
- Tap `Add to Home Screen` <span class="app-tool"><svg><use xlink:href="/images/feather-sprite.svg#plus-square" /></svg></span>
- Confirm the download

### Android

To download the app on Android:

- Open the JustSketchMe webapp in Android Chrome
- Open the browser settings menu <span class="app-tool"><svg><use xlink:href="/images/feather-sprite.svg#more-vertical" /></svg></span> in the top right toolbar
- Tap `Add to Home Screen`
- Confirm the download

### Mac & Windows

Download the [Mac](https://justsketchme-apps.fra1.cdn.digitaloceanspaces.com/justsketchme.dmg) and [Windows](https://justsketchme-apps.fra1.cdn.digitaloceanspaces.com/JustSketchMe.exe) apps and follow the installation instructions.

---

## Subscriptions

JustSketchMe has a premium subscription which gives you access to the full functionality of the webapp. You can learn more about that and sign up [here](https://gum.co/justsketchme) or click the `Upgrade` button in the top right of the screen and select `Get full access!`.

### License key

License keys are distributed by Gumroad and act as your "login". Activate your application by clicking the `Upgrade` button in the top right of the screen and pasting your license key into the `License key` field and clicking `Activate`. 

### Devices

Your license key can be used on all of your devices. Your saved pose and scene information will be shared between all of the devices activated with your license key. 

### Manage subscription

Manage subscription is used to: 
- Upgrade to a different plan
- Change payment information
- Restart a subscription

You can manage your subscription in your [Gumroad library](https://gumroad.com/library) or by following the `Manage subscription` link at the bottom of every email receipt from Gumroad. 

### Cancel subscription

Subscriptions can be cancelled using the [manage subscription](#manage-subscription) instructions above. 