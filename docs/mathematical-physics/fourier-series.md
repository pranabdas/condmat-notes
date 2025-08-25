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

## Fourier transform

The above concept can be generalized to any function, not only periodic
functions by taking the limit $l \rightarrow \infty$. As a physical requirement,
$f(x) \rightarrow 0$ as $x \rightarrow \pm \infty$.

$$
F(k) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{+\infty} f(x) e^{-ikx} dx
$$

$$
f(x) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{+\infty} F(k) e^{ikx} dk
$$

If $f(x)$ satisfies the Dirichlet conditions and the integral

$$
\int_{-\infty}^{+\infty} |f(x)|^2 dx
$$

is finite (square integrable), then $F(k)$ exists for all $k$ and is called the
Fourier transform of $f(x)$. The function $f(x)$ is called the inverse Fourier
transform of $F(k)$.

Both the original function and its Fourier transform contain equivalent
information, however one could be easier to deal with than another. For example,
it could be transformation of a wave from time domain to frequency domain. There
are few different conventions, varying in the sign of the exponent,
normalization factor, etc.

When the function (and its Fourier transform) are discretized for numerical
computation, it is called discrete Fourier transform (DFT). There is a very fast
algorithm introduced by Cooley and Tukey (in its modern form, the algorithm was
known to Gauss circa 1805), and is known as Fast Fourier Transform (FFT)[^1].

## Resources
- *Analytic Methods in Physics* by *Charlie Harper*.

[^1]: James W. Cooley, and John W. Tukey, An Algorithm for the Machine
Calculation of Complex Fourier Series, *Math. Comput.* **19**, 297 (1965).
