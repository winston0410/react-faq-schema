module Helper where

import Prelude
import Data.Maybe
import Data.Array
import Data.Functor
import Foreign

safeMap :: forall a b. (a -> b) -> Array a -> Array b
safeMap fn arr
  | (isUndefined (unsafeToForeign arr)) = map fn []
  | otherwise = map fn arr

-- safeMap fn arr = map fn arr

-- Handle case when arr is undefined
