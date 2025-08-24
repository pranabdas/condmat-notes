---
title: Fourier Series
---

## Dirichlet's Theorem

If $f(x)$
1. is defined and bounded in the interval $[-\pi, \pi]$,
2. has at most a finite number of maxima and minima, and has only a finite
number of discontinuities in this interval,
3. if $f(x)$ is defined by the periodic condition $f(x + 2\pi) = f(x)$ for
values of $x$ outside of this interval, then

$$
s_p = \frac{a_0}{2} + \sum_{n=1}^p[a_n \cos(nx) + b_n \sin(nx)]
$$

converges to $f(x)$ as $p \rightarrow \infty$ at values of $x$ for which $f(x)$
is continuous, and it converges to $[f(x+0) + f(x-0)]/2$ at points of
discontinuity. $f(x+0)$ and $f(x-0)$ refers to the limits from the right and
left, respectively. The expansion coefficients, $a_n$ and $b_n$ are determined
by use of the Euler's formulas:

$$
a_n = \frac{1}{\pi} \int_{-\pi}^{+\pi} f(x)\cos(nx)dx \qquad (n = 0, 1, 2,\ldots)
$$

$$
b_n = \frac{1}{\pi} \int_{-\pi}^{+\pi} f(x)\sin(nx)dx \qquad (n = 0, 1, 2,\ldots)
$$

### Change of interval
For a periodic function in the interval $[-l, l]$, i.e., $f(x) = f(x+2l)$,
Fourier series can be expressed as:

$$
f(x) = \frac{a_0}{2} + \sum_{n=1}^{\infty} \left[a_n \cos\left(\frac{n\pi x}{l}
\right) + b_n \sin\left(\frac{n \pi x}{l}\right) \right]
$$

With expansion coefficients given by

$$
a_n = \frac{1}{l} \int_{-l}^{+l} f(x)\cos \left(\frac{n \pi x}{l}\right)dx \qquad
(n = 0, 1, 2,\ldots)
$$

$$
b_n = \frac{1}{l} \int_{-l}^{+l} f(x)\sin \left(\frac{n \pi x}{l}\right)dx \qquad
(n = 0, 1, 2,\ldots)
$$

### Complex form
Fourier series can also be expressed as

$$
f(x) = \sum_{n=-\infty}^{\infty} c_n e^{in\pi x/l} \qquad \text{for} ~ [-l, l]
$$

with expansion coefficients given by

$$
c_n = \frac{1}{2l} \int_{-l}^{+l} f(x) e^{-in\pi x/l} dx
$$

## Resources
- *Analytic Methods in Physics* by *Charlie Harper*.

