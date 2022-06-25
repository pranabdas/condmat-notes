---
title: Laue diffraction
---

Laue diffraction is similar to the powder x-ray diffraction. In this case we use
a white x-ray beam instead of monochromatic one. And instead of all possible
orientation of the crystal, we expose a single crystallographic surface. The
periodic arrangement of atoms inside a solid can be experimentally checked by
Laue x-ray diffraction.

In this technique, a beam of white x-ray (a continuous range of wavelength) is
collimated over a single crystal. Depending on the property of the material, a
back reflected or transmitted scattered x-ray pattern is collected over a x-ray
film or image plate.

<picture>
  <source type="image/webp" srcSet={require("/img/laue-setup.webp").default} />
  <img src={require("/img/laue-setup.png").default} alt="ARPESstation" width="600px" />
</picture>

<div class="fig-caption">
<b>Fig.:</b> A typical laboratory Laue setup.
</div>

Since we are using a white x-ray, we will have a dot for all sets of
crystallographic planes. This is how a typical x-ray pattern of a single crystal
look like.

<picture>
  <source type="image/webp" srcSet={require("/img/laue-pattern.webp").default} />
  <img src={require("/img/laue-pattern.png").default} alt="laue-pattern" width="400px" />
</picture>

<div class="fig-caption">
<b>Fig.:</b> Laue pattern of CeGe [010] surface. CeGe has orthorhombic crystal
structure.
</div>

The single crystal is mounted on a triple axis goniometer. The single crystal
can be translated and rotated along all three mutually perpendicular axes.

Once the single crystal direction is fixed, the same goniometer can be
transported to a wire cutting machine, and cut in a particular shape (generally
rectangular bar form) for various anisotropic measurements, for example,
electrical transport measurement.

### Resources
- [Laue simulation using Orient Express](
https://pranabdas.github.io/research/orient-express/)
