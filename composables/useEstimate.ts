import { tents } from '~/data/tents'
import { makeups } from '~/data/makeups'
import { decorations } from '~/data/decorations'
import {
  areaSize,
  estimateLines,
  quotationMessage,
  type EstimateConfig,
  type EventInfo,
} from '~/utils/estimate'
import { whatsappUrl, safeNumber } from '~/utils/format'
export const useEstimate = () => {
  const route = useRoute()
  const initialTent =
    tents.find((t) => t.slug === route.query.tent) || tents[1]!
  const initialColor =
    typeof route.query.color === 'string' &&
    initialTent.availableColors.includes(route.query.color)
      ? route.query.color
      : initialTent.availableColors[0]!
  let nextId = 2
  const event = reactive<EventInfo>({
    name: '',
    date: '',
    location: '',
    guests: 100,
    notes: '',
  })
  const config = reactive<EstimateConfig>({
    areas: [
      {
        id: 1,
        name: 'Tenda Tamu',
        method: route.query.area ? 'direct' : 'dimensions',
        length: 10,
        width: 10,
        direct: safeNumber(route.query.area) || 100,
        tentSlug: initialTent.slug,
        color: initialColor,
      },
    ],
    decoration:
      decorations.find((d) => d.id === route.query.decoration)?.id || '',
    makeup: String(
      makeups.find((m) => m.slug === route.query.makeup)?.id || '',
    ),
    extras: {},
    furniture: {},
    lighting: '',
    transport: 'tangerang',
  })
  const addArea = () =>
    config.areas.push({
      id: nextId++,
      name: `Area ${nextId - 1}`,
      method: 'dimensions',
      length: 10,
      width: 10,
      direct: 100,
      tentSlug: initialTent.slug,
      color: initialTent.availableColors[0]!,
    })
  const removeArea = (id: number) => {
    if (config.areas.length > 1)
      config.areas = config.areas.filter((a) => a.id !== id)
  }
  const lines = computed(() => estimateLines(config))
  const total = computed(() => lines.value.reduce((sum, l) => sum + l.price, 0))
  const totalArea = computed(() =>
    config.areas.reduce((sum, a) => sum + areaSize(a), 0),
  )
  const valid = computed(
    () =>
      event.name.trim().length > 0 &&
      event.location.trim().length > 0 &&
      config.areas.every(
        (a) =>
          areaSize(a) >= 1 &&
          tents.some(
            (t) => t.slug === a.tentSlug && t.availableColors.includes(a.color),
          ),
      ),
  )
  const whatsapp = computed(() => whatsappUrl(quotationMessage(event, config)))
  return {
    event,
    config,
    addArea,
    removeArea,
    lines,
    total,
    totalArea,
    valid,
    whatsapp,
  }
}
