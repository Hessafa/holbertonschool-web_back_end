#!/usr/bin/env python3
"""Module that contains an asynchronous generator yielding
a random float between 0 and 10, ten times with a 1 second delay."""

import asyncio
import random
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """Asynchronous generator that yields a random float between 0 and 10,
    ten times, each after asynchronously waiting 1 second."""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
