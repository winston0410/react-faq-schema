module Helper where

import Prelude
import Data.Maybe
import Data.Array
import Data.Functor

safeMap :: forall a b. (a -> b) -> Array a -> Array b
safeMap fn arr = map fn arr

-- Handle case when arr is undefined
