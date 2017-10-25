
import { Prefixes } from './Prefixes'

export namespace Predicates {

    export const a:string = Prefixes.rdf + 'type'

    export namespace SBOL2 {
        export const component:string = Prefixes.sbol2 + 'component'
        export const module:string = Prefixes.sbol2 + 'module'
        export const definition:string = Prefixes.sbol2 + 'definition'
        export const functionalComponent:string = Prefixes.sbol2 + 'functionalComponent'
        export const role:string = Prefixes.sbol2 + 'role'
        export const location:string = Prefixes.sbol2 + 'location'
        export const start:string = Prefixes.sbol2 + 'start'
        export const end:string = Prefixes.sbol2 + 'end'
        export const sequenceAnnotation:string = Prefixes.sbol2 + 'sequenceAnnotation'
        export const sequenceConstraint:string = Prefixes.sbol2 + 'sequenceConstraint'
        export const orientation:string = Prefixes.sbol2 + 'orientation'
        export const displayId:string = Prefixes.sbol2 + 'displayId'
        export const version:string = Prefixes.sbol2 + 'version'
        export const access:string = Prefixes.sbol2 + 'access'
        export const mapsTo:string = Prefixes.sbol2 + 'mapsTo'
        export const local:string = Prefixes.sbol2 + 'local'
        export const remote:string = Prefixes.sbol2 + 'remote'
        export const interaction:string = Prefixes.sbol2 + 'interaction'
        export const participation:string = Prefixes.sbol2 + 'participation'
        export const participant:string = Prefixes.sbol2 + 'participant'
        export const type:string = Prefixes.sbol2 + 'type'
        export const sequence:string = Prefixes.sbol2 + 'sequence'
        export const encoding:string = Prefixes.sbol2 + 'encoding'
        export const elements:string = Prefixes.sbol2 + 'elements'
        export const persistentIdentity:string = Prefixes.sbol2 + 'persistentIdentity'
        export const restriction:string = Prefixes.sbol2 + 'restriction'
        export const subject:string = Prefixes.sbol2 + 'subject'
        export const object:string = Prefixes.sbol2 + 'object'
        export const member:string = Prefixes.sbol2 + 'member'
    }

    export namespace SBOLX {
        export const hasSubComponent:string = Prefixes.sbolx + 'hasSubComponent'
        export const instanceOf:string = Prefixes.sbolx + 'instanceOf'
        export const hasRole:string = Prefixes.sbolx + 'hasRole'
        export const hasLocation:string = Prefixes.sbolx + 'hasLocation'
        export const rangeStart:string = Prefixes.sbolx + 'rangeStart'
        export const rangeEnd:string = Prefixes.sbolx + 'rangeEnd'
        export const hasSequenceConstraint:string = Prefixes.sbolx + 'hasSequenceConstraint'
        export const orientation:string = Prefixes.sbolx + 'orientation'
        export const id:string = Prefixes.sbolx + 'id'
        export const version:string = Prefixes.sbolx + 'version'
        export const hasInteraction:string = Prefixes.sbolx + 'hasInteraction'
        export const hasParticipation:string = Prefixes.sbolx + 'hasParticipation'
        export const participant:string = Prefixes.sbolx + 'participant'
        export const type:string = Prefixes.sbolx + 'type'
        export const usesSequence:string = Prefixes.sbolx + 'usesSequence'
        export const sequenceEncoding:string = Prefixes.sbolx + 'sequenceEncoding'
        export const sequenceElements:string = Prefixes.sbolx + 'sequenceElements'
        export const persistentIdentity:string = Prefixes.sbolx + 'persistentIdentity'
        export const constraintRestriction:string = Prefixes.sbolx + 'constraintRestriction'
        export const constraintSubject:string = Prefixes.sbolx + 'constraintSubject'
        export const constraintObject:string = Prefixes.sbolx + 'constraintObject'
        export const hasSequenceFeature:string = Prefixes.sbolx + 'hasSequenceFeature'
        export const hasMember:string = Prefixes.sbolx + 'hasMember'
    }

    export namespace Dcterms {

        export const title:string = Prefixes.dcterms + 'title'
        export const description:string = Prefixes.dcterms + 'description'

    }

    export namespace SVG {
        export const fontFamily:string = Prefixes.svg + 'font-family'
        export const fontSize:string = Prefixes.svg + 'font-size'
        export const fontStyle:string = Prefixes.svg + 'font-style'
    }

    export namespace SyBiOnt {

        export const encodedBy:string = Prefixes.sybio + 'en_by'



    }

    export namespace Prov {

        export const wasDerivedFrom:string = Prefixes.prov + 'wasDerivedFrom'

    }

    export namespace Enrichment {

        export const hint:string = Prefixes.enrichment + 'hint'

        export const orfStart:string = Prefixes.enrichment + 'orfStart'
        export const orfEnd:string = Prefixes.enrichment + 'orfEnd'


    }



}
