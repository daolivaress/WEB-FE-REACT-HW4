import Introduction from './main-components/Introduction'
import ActualDiagnostic from './main-components/Actual_diagnostic'
import OrganizationalIdentity from './main-components/Organizational_identity'
import StrategicObjectives from './main-components/Strategic_objective'

function Main() {
  return (
    <main className='w-full max-w-full mx-auto px-8 lg:px-12 lg:w-3/4'>
        <Introduction></Introduction>
        <ActualDiagnostic></ActualDiagnostic>
        <OrganizationalIdentity></OrganizationalIdentity>
        <StrategicObjectives></StrategicObjectives>
    </main>
  )
}

export default Main