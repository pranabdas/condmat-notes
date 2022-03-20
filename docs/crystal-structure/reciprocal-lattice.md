---
title: Reciprocal lattice and Brillouin zone
sidebar_label: Reciprocal lattice
---

### Definition
Given a (direct) lattice of points $\textbf{R}$, a point $\textbf{G}$ is a point
in the reciprocal lattice if and only if

$$
e^{(i\textbf{G}\cdot\textbf{R})} = 1
$$

for all points $\textbf{R}$ of the direct lattice.

### Construction of reciprocal lattice
Let us write the points of the direct lattice in the form:

$$
\textbf{R} = n_1\textbf{a}_1 + n_2 \textbf{a}_2 + n_3\textbf{a}_3
$$

With $n_1$, $n_2$  and $n_3$  integers, and with $\textbf{a}_1$, $\textbf{a}_2$,
and $\textbf{a}_3$ being primitive lattice vectors of the direct lattice. Now we
can construct the reciprocal vectors by following this condition:

The primitive lattice vectors of the reciprocal lattice, say $\textbf{b}_1$,
$\textbf{b}_2$, and $\textbf{b}_3$ are defined to have the following property:

$$
\textbf{a}_i\cdot\textbf{b}_j = 2\pi\delta_{ij}
$$

We can construct vectors $\textbf{b}_i$ to have the above desired property, as
follows:

$$
\textbf{b}_1 = \frac{2\pi~\textbf{a}_2\times\textbf{a}_3}{\textbf{a}_1\cdot(\textbf{a}_2\times\textbf{a}_3)}
$$

We can write any arbitrary point in the reciprocal space as

$$
\textbf{G} = m_1\textbf{b}_1 + m_2\textbf{b}_2 + m_3\textbf{b}_3
$$

where $\textbf{m}_1$, $\textbf{m}_2$, and $\textbf{m}_3$ are integers. So the
reciprocal lattice is a lattice as well. Reciprocal lattice points can be
understood as families of lattice planes of the direct lattice. A lattice plane
is plane containing at least three non-colinear points of a lattice. A family of
lattice planes is an infinite set of equally separated lattice planes which
taken together contain all points of the lattice.

The families of lattice planes are in one-to-one correspondence with the
possible directions of reciprocal lattice vectors, to which they are normal.
Further the spacing between these lattice planes is
$d = 2\pi/\mid\textbf{G}_{min}\mid$, where $\textbf{G}_{min}$ is the minimum
length reciprocal lattice vector in this normal direction.
