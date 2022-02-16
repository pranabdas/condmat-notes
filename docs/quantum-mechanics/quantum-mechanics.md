---
title: Quantum Mechanics
---

The underlying physics behind condensed matter physics is governed by quantum
mechanics. In quantum mechanics, we look for the wave function ($\psi$) of
particle for a given potential field $V(\textbf{r})$. The wave function can be
obtained by solving the Schrödinger equation:

$$
i \hbar \frac{\partial\psi}{\partial t} = - \frac{\hbar^2}{2m} \frac{\partial^2\psi}{\partial x^2} + V \psi
$$

Once we have the wave function $\psi$, the probability of of finding a particle
is given by $|\psi(x, t)|^2$. To be physically acceptable the wave function has
to be square integrable:

$$
\int_{-\infty}^{+\infty} |\psi(x, t)|^2 dx = 1
$$

If the potential field is time independent, the Schrödinger equation can be
solved by separation of variable. The spatial part gives the time independent
Schrödinger equation:

$$
-\frac{\hbar^2}{2m} \frac{\partial^2\psi}{\partial x^2} + V \psi = E \psi
$$

The above equation can be solved for simple potential fields: for example,
square well potential, parabolic potential/ harmonic oscillator, hydrogen atom.
